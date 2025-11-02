import {
  useCallback,
  useEffect,
  useEffectEvent,
  useRef,
  useState,
} from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

type Theme = "light" | "dark";
type Room = "general" | "support";

function createConnection(roomId: Room, onConnected: (roomId: Room) => void) {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  return {
    connect() {
      timeoutId = setTimeout(() => {
        onConnected(roomId);
      }, 300);
    },
    disconnect() {
      if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }
    },
  };
}

export function EffectEventAfterUseEffectEvent() {
  const [theme, setTheme] = useState<Theme>("light");
  const [room, setRoom] = useState<Room>("general");
  const [connectionCount, setConnectionCount] = useState(0);
  const [notifications, setNotifications] = useState<
    Array<{ id: number; message: string }>
  >([]);
  const notificationId = useRef(0);

  const appendNotification = useCallback((message: string) => {
    const id = notificationId.current;
    notificationId.current += 1;
    setNotifications((prev) => [...prev, { id, message }]);
  }, []);

  const handleConnected = useEffectEvent((connectedRoom: Room) => {
    appendNotification(
      `✅ ${connectedRoom} ルームに接続しました (theme: ${theme})`,
    );
    setConnectionCount((count) => count + 1);
  });

  useEffect(() => {
    const connection = createConnection(room, handleConnected);

    appendNotification(`🔌 ${room} へ接続を試みています...`);
    connection.connect();

    return () => {
      connection.disconnect();
      appendNotification(`⛔️ ${room} の接続を切断しました`);
    };
  }, [room, appendNotification]);

  const recentNotifications = notifications.slice(-4);

  return (
    <Card>
      <CardHeader>
        <CardTitle>useEffectEvent でイベント処理を分離</CardTitle>
        <CardDescription>
          Effect Events が最新の props/state
          を参照するため、テーマ変更でも接続は維持されます。
        </CardDescription>
      </CardHeader>
      <Separator />
      <CardContent className="space-y-4">
        <div className="flex gap-2">
          <Button
            variant={room === "general" ? "default" : "outline"}
            size="sm"
            onClick={() => setRoom("general")}
          >
            General
          </Button>
          <Button
            variant={room === "support" ? "default" : "outline"}
            size="sm"
            onClick={() => setRoom("support")}
          >
            Support
          </Button>
          <Button
            variant={theme === "light" ? "outline" : "default"}
            size="sm"
            onClick={() =>
              setTheme((prev) => (prev === "light" ? "dark" : "light"))
            }
          >
            Theme: {theme}
          </Button>
        </div>
        <dl className="grid gap-2 text-sm">
          <div className="flex items-center justify-between">
            <dt className="text-muted-foreground">接続回数</dt>
            <dd className="font-mono text-xs">{connectionCount}</dd>
          </div>
        </dl>
        <div className="space-y-2 rounded-lg border bg-muted/40 p-3 text-xs">
          {recentNotifications.map((note) => (
            <p key={note.id}>{note.message}</p>
          ))}
        </div>
        <p className="text-xs text-muted-foreground">
          Effect Event は依存配列に含める必要がなく、最新の theme
          を安全に参照できます。
        </p>
      </CardContent>
    </Card>
  );
}
