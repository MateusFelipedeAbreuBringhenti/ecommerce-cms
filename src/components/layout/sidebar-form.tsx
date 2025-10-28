import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { Button } from "../ui/button";
import { useLocation, useNavigate } from "react-router-dom";
import type React from "react";

type SidebarFormProps = {
    title: string;
    children: React.ReactNode;
    onSave: () => void;
};

export function SidebarForm({
    title,
    children
}: SidebarFormProps) {
    const navigate = useNavigate();
    const location = useLocation();

    function handleCloseForm(open: boolean) {
        if (!open) {
            const currentPath = location.pathname;
            const newPath = currentPath.substring(0, currentPath.lastIndexOf('/'));
            navigate(newPath);
        }
    }

  return (
    <Sheet open={true} onOpenChange ={handleCloseForm}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
          <SheetDescription>
            Preencha os campos abaixo e clique em salvar.
          </SheetDescription>
        </SheetHeader>

        {children}

        <SheetFooter>
            <div className="flex flex-row gap-1">

                <Button
                >
                    Salvar
                </Button>

                <SheetClose asChild>
                    <Button variant="outline">
                        Cancelar
                    </Button>
                </SheetClose>

            </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}