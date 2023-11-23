/**
 * BEGIN
 */

import { memo } from "react";
import { Panel } from "reactflow";
import { motion } from "framer-motion";
import { hstack } from "#styled/patterns";
import { TextNodeEditor } from "~/components/TextNodeEditor";
import { OpenFile } from "#components/OpenFile";
import { ResetBoard } from "#components/ResetBoard";
import { SaveTo } from "#components/SaveTo";
import { SaveToImage } from "#components/SaveToImage";

export const Controls = memo(() => {
  return (
    <motion.div
      initial={{
        y: -50,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          delay: 0.1,
        },
      }}
    >
      <Panel
        position="top-center"
        className={hstack()}
      >
        <OpenFile />
        <SaveTo />
        <SaveToImage />
        <ResetBoard />
        <TextNodeEditor />
      </Panel>
    </motion.div>
  );
});

export default Controls;

/**
 * END
 */
