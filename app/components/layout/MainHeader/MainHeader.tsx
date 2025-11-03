import { Link, useLocation } from "react-router";
import { Button } from "@/components/ui/button";
import icon from "./icon.svg";

export function MainHeader() {
  const location = useLocation();
  return (
    <header className="sticky top-0 z-50 w-full bg-background">
      <div className="container-wrapper px-6">
        <div className="flex h-(--header-height) items-center py-4 flex-start gap-4">
          <div className="flex items-center">
            <img src={icon} alt="React 19.2 Logo" width={24} height={24} />
            <span className="ml-3 text-lg font-bold text-foreground">
              Try React Update
            </span>
          </div>
          <Link to="/">
            <Button
              variant={location.pathname === "/" ? "default" : "ghost"}
              size="sm"
            >
              v19.0
            </Button>
          </Link>
          <Link to="/v19-2">
            <Button
              variant={location.pathname === "/v19-2" ? "default" : "ghost"}
              size="sm"
            >
              v19.2
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
