"use client";
import { useEffect, useState } from "react";
import {
  Abstraxion,
  useAbstraxionAccount,
  useModal
} from "@burnt-labs/abstraxion";
import { Button } from "@burnt-labs/ui";

export default function Page(): JSX.Element {
  // Abstraxion hooks
  const { data: account } = useAbstraxionAccount();

  // General state hooks
 const [showAbstraxion, setShowAbstraxion] = useModal();

  return (
      <main className="m-auto flex min-h-screen max-w-xs flex-col items-center justify-center gap-4 p-4">
        <h1 className="text-2xl font-bold tracking-tighter text-black dark:text-white">
          ABSTRAXION
        </h1>
        <Button
            fullWidth
            onClick={() => {
              setShowAbstraxion(true);
            }}
            structure="base"
            theme="secondary"
        >
          {account ? (
              <div className="flex items-center justify-center">VIEW ACCOUNT</div>
          ) : (
              "CONNECT"
          )}
        </Button>
        <Abstraxion
          onClose={() => { 
            setShowAbstraxion(false);
          }}
        />
      </main>
  );
}
