/**
 * BEGIN
 */

import { IconTextPlus } from "@tabler/icons-react";
import { Dialog } from "#components/ui/Dialog";
import { Tooltip } from "#components/ui/Tooltip";
import { getViewportForBounds, useReactFlow } from "reactflow";
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import { Button } from "#components/ui/Button";
import { Fragment, useCallback } from "react";
import { useAtom } from "jotai";
import {
  addTextModalFullScreen,
  addTextModalVisible,
  selectedNode,
} from "~/atom";
import { Box, HStack, Stack } from "#styled/jsx";
import { TextNodeDataSchema } from "#schemas/textNodeData";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { Message } from "#components/ui/Message";
import { ColorPicker } from "#components/ColorPicker";
import { getHex } from "#utils/getHex";
import { Portal } from "@ark-ui/react";
import { block } from "million/react";
import { isObject, pick, uid } from "radash";
import { FullScreen } from "#components/FullScreen";
import { Textarea } from "#components/ui/Textarea";

export const TextNodeEditor = block(() => {
  const { setNodes } = useReactFlow();
  const [modalVisible, setModalVisible] = useAtom(addTextModalVisible);
  const [fullscreen, setFullScreen] = useAtom(addTextModalFullScreen);
  const [getSelectedNode, resetSelectedNode] = useAtom(selectedNode);
  const schema = toFormikValidationSchema(TextNodeDataSchema);
  const getNodeId = () => `node_${uid(20)}`;

  const initialValues = getSelectedNode
    ? pick(getSelectedNode.data, ["content", "color"])
    : {
        content: "",
        color: "gray.200",
      };

  const { x, y } = getViewportForBounds(
    {
      x: 0,
      y: 0,
      width: window.screenY,
      height: window.screenX,
    },
    1200,
    800,
    0.5,
    2,
  );

  const onSubmitHandle = async (
    values: TextNodeDataSchema,
    { setSubmitting, resetForm }: FormikHelpers<TextNodeDataSchema>,
  ) => {
    const data = {
      ...(getSelectedNode
        ? getSelectedNode
        : {
            id: getNodeId(),
            type: "text",
            position: {
              x,
              y,
            },
          }),
      data: {
        content: values.content,
        color: values.color,
      },
      style: values.color
        ? {
            borderColor: getHex(values.color.replace("200", "300")),
            backgroundColor: getHex(values.color),
            color: getHex(values.color.replace("200", "800")),
            ...(getSelectedNode
              ? {
                  width: getSelectedNode.width,
                  height: getSelectedNode.height,
                }
              : {}),
          }
        : {},
    };
    setNodes((nds) => [data, ...nds.filter((e) => e.id !== data.id)]);
    setModalVisible(false);
    setSubmitting(false);
    resetSelectedNode(null);
    resetForm();
  };

  const onExitComplete = useCallback(() => {
    setModalVisible(false);
    resetSelectedNode(null);
  }, [resetSelectedNode, setModalVisible]);

  return (
    <Fragment>
      <Tooltip.Root
        lazyMount
        openDelay={300}
        closeDelay={100}
      >
        <Tooltip.Trigger asChild>
          <Button
            variant="toolbar"
            size="md"
            onClick={() => setModalVisible(true)}
            aria-label="Add Text Node"
            data-splitbee-event="Click AE Text Node Button"
          >
            <IconTextPlus size={20} />
          </Button>
        </Tooltip.Trigger>
        <Tooltip.Positioner>
          <Tooltip.Content>Add Text Node</Tooltip.Content>
        </Tooltip.Positioner>
      </Tooltip.Root>
      <Dialog.Root
        open={modalVisible || isObject(getSelectedNode)}
        lazyMount
        unmountOnExit
        onOpenChange={() => setFullScreen(false)}
        onExitComplete={onExitComplete}
      >
        <Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content
              {...(fullscreen
                ? {
                    w: "calc(100% - 100)",
                    h: "calc(100% - 100)",
                  }
                : {
                    size: "lg",
                  })}
            >
              <Dialog.Title>
                {isObject(getSelectedNode) ? "Edit Text Node" : "Create Text Node"}
              </Dialog.Title>
              <Dialog.Description>
                {isObject(getSelectedNode)
                  ? "You can save your node content after editing it."
                  : "Type the content of the node you want to create and save it."}
              </Dialog.Description>
              <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={onSubmitHandle}
                validateOnChange
              >
                {({ values, handleChange, handleSubmit, isSubmitting }) => (
                  <Form onSubmit={handleSubmit}>
                    <Stack mt={5}>
                      <Box position="relative">
                        <FullScreen
                          onClick={() => setFullScreen(!fullscreen)}
                          value={fullscreen}
                        />
                        <Textarea
                          name="content"
                          onChange={handleChange}
                          defaultValue={values.content}
                          minRows={10}
                          size="full"
                        />
                        <ErrorMessage name="content">
                          {(msg) => <Message status="error">{msg}</Message>}
                        </ErrorMessage>
                      </Box>
                      <Field
                        component={ColorPicker}
                        name="color"
                        value={values.color}
                        onChange={handleChange}
                      />
                      <ErrorMessage name="color">
                        {(msg) => <Message status="error">{msg}</Message>}
                      </ErrorMessage>
                    </Stack>
                    <HStack
                      w="max"
                      ml="auto"
                      mt={5}
                    >
                      <Dialog.CloseTrigger>
                        <Button
                          variant="outline"
                          size="md"
                          type="reset"
                        >
                          Cancel
                        </Button>
                      </Dialog.CloseTrigger>
                      <Button
                        variant="primary"
                        size="md"
                        type="submit"
                        disabled={isSubmitting}
                      >
                        Save
                      </Button>
                    </HStack>
                  </Form>
                )}
              </Formik>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
    </Fragment>
  );
});

/**
 * END
 */
