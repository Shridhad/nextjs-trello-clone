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

type CreateNewIssueProps = {
  project: Project;
  create: (form: FormData) => any;
};

export default function CreateNewIssue({
  project,
  create,
}: CreateNewIssueProps) {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [transitioning, startTransition] = useTransition();
  const [issueTitle, setIssueTitle] = useState("");
  const [description, setDescription] = useState("");

  const onCreate = () => {
    const form = new FormData();
    form.set("title", issueTitle);
    form.set("description", description);
    startTransition(async () => {
      const response = await create(form);
      console.log("**** response ", response);
      onClose();
    });
  };

  return (
    <>
      <Button color="primary" variant="flat" onPress={onOpen} radius="sm">
        Create New Issue
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
              <ModalHeader className="flex justify-start gap-1 items-center text-sm">
                <Chip
                  className="uppercase px-2 py-1"
                  size="sm"
                  radius="sm"
                  variant="flat"
                  color="secondary"
                >
                  {project.key}
                </Chip>
                <span> New Issue</span>
              </ModalHeader>
              <ModalBody>
                <Input
                  radius="sm"
                  value={issueTitle}
                  placeholder="Issue Title"
                  onValueChange={(title) => setIssueTitle(title)}
                ></Input>
                <Textarea
                  radius="sm"
                  value={description}
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
