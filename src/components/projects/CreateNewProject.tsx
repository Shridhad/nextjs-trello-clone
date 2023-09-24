"use client";

import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/modal";
import { useState, useTransition } from "react";
import { Divider } from "../Divider";

type CreateNewIssueProps = {
  create: (title: string, key: string) => any;
};

export default function CreateNewProject({ create }: CreateNewIssueProps) {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [transitioning, startTransition] = useTransition();
  const [title, setTitle] = useState("");
  const [key, setKey] = useState("");

  const onCreate = () => {
    startTransition(async () => {
      await create(title, key);
      onClose();
    });
  };

  return (
    <>
      <Button variant="light" onPress={onOpen} radius="sm" className="w-full">
        + Create New Project
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
                  <span> New Porject</span>
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
                <Input
                  radius="sm"
                  value={key}
                  onValueChange={(desc) => setKey(desc)}
                  placeholder="Issue Description"
                ></Input>
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
