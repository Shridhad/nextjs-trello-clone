"use client";

import { Button, Input } from "@nextui-org/react";
import { Project } from "@prisma/client";
import { useState } from "react";

type CreateNewList = {
  projectKey: string;
  create: (name: string, key: string) => void;
};

export default function CreateNewList({ projectKey, create }: CreateNewList) {
  const [showInput, setShowInput] = useState(false);
  const [listName, setListName] = useState("");

  const createList = () => {
    console.log("List Name: ", listName);
    create(listName, projectKey);
  };

  return (
    <>
      <div className="flex items-stretch w-full">
        {showInput ? (
          <form action={createList}>
            <Input
              type="text"
              value={listName}
              className="flex-grow"
              placeholder="Enter List Name"
              onChange={(event) => setListName(event.target.value)}
              endContent={
                <Button
                  size="sm"
                  radius="sm"
                  variant="light"
                  onClick={createList}
                >
                  Create
                </Button>
              }
            />
          </form>
        ) : (
          <Button
            radius="sm"
            className="flex-grow"
            onClick={() => setShowInput(true)}
          >
            + Create New List
          </Button>
        )}
      </div>
    </>
  );
}
