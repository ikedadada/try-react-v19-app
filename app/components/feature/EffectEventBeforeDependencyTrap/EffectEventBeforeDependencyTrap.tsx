import { useCallback, useEffect, useMemo, useRef, useState } from "react";

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

export function EffectEventBeforeDependencyTrap() {
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

  const connectionKey = useMemo(() => `${room}-${theme}`, [room, theme]);

  useEffect(() => {
    const connection = createConnection(room, (connectedRoom) => {
      appendNotification(
        `✅ ${connectedRoom} ルームに再接続しました (theme: ${theme})`,
      );
      setConnectionCount((count) => count + 1);
    });

    appendNotification(`🔌 ${connectionKey} へ接続を試みています...`);
    connection.connect();

    return () => {
      connection.disconnect();
      appendNotification(`⛔️ ${connectionKey} の接続を切断しました`);
    };
  }, [room, theme, connectionKey, appendNotification]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>theme 変更で useEffect が再実行</CardTitle>
        <CardDescription>
          useEffect にイベント処理が含まれているため、テーマ切り替え時にも接続が張り直されています。
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
            onClick={() => setTheme((prev) => (prev === "light" ? "dark" : "light"))}
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
          {notifications.slice(-4).map((note) => (
            <p key={note.id}>{note.message}</p>
          ))}
        </div>
        <p className="text-xs text-muted-foreground">
          テーマ変更だけで接続がリセットされ、無駄な再接続が発生しています。
        </p>
      </CardContent>
    </Card>
  );
}
