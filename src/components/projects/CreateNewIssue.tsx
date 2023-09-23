"use client";

import React, { useState, useTransition } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import { Chip } from "@nextui-org/chip";
import { Input, Textarea } from "@nextui-org/input";
import { Project } from "@prisma/client";
import { Divider } from "../Divider";

type CreateNewIssueProps = {
  project: Project;
  listId: string;
  create: (title: string, description: string, listId: string) => any;
};

export default function CreateNewIssue({
  project,
  listId,
  create,
}: CreateNewIssueProps) {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [transitioning, startTransition] = useTransition();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const onCreate = () => {
    startTransition(async () => {
      const response = await create(title, description, listId);
      onClose();
    });
  };

  return (
    <>
      <Button variant="light" onPress={onOpen} radius="sm" className="w-full">
        + Create New Issue
      </Button>
      <Modal
        size="3xl"
        isOpen={isOpen}
        backdrop="opaque"
        placement="top"
        radius="sm"
        onOpenChange={onOpenChange}
        isDismissable={true}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col">
                <div className="flex justify-start align-middle gap-1 items-start">
                  <Chip
                    className="uppercase px-2 py-1"
                    size="sm"
                    radius="none"
                    variant="flat"
                    color="primary"
                  >
                    {project.key}
                  </Chip>
                  <span> New Issue</span>
                </div>
                <Divider />
              </ModalHeader>
              <ModalBody>
                <Input
                  radius="sm"
                  value={title}
                  placeholder="Issue Title"
                  onValueChange={(title) => setTitle(title)}
                ></Input>
                <Textarea
                  radius="sm"
                  value={description}
                  minRows={5}
                  maxRows={30}
                  onValueChange={(desc) => setDescription(desc)}
                  placeholder="Issue Description"
                ></Textarea>
              </ModalBody>
              <ModalFooter>
                <Button
                  color="primary"
                  disabled={transitioning}
                  onPress={onCreate}
                  radius="sm"
                  variant="flat"
                >
                  Create
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
