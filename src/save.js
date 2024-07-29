import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Save = () => {
  const [note, setNote] = useState("");
  const [savedNotes, setSavedNotes] = useState([]);

  const handleSave = (e) => {
    setNote(e.target.value);
  };

  const handleButton = () => {
    setSavedNotes([note, ...savedNotes]);
    setNote('');
  };
  const handleReset=()=>{
    window.location.reload();
  }

  const containerVariants = {
    hidden: { opacity: 1, x: 0 },
    visible: { opacity: 1, x: 0, transition: { staggerChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 },
  };

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">Saving Notes</h1>
      <input
        type="text"
        id="note"
        name="note"
        className="input input-bordered input-primary mb-4 w-full max-w-md"
        placeholder="Enter the note to save"
        onChange={handleSave}
        value={note}
      />
       <div className="flex space-x-2 mb-4">
        <button className="btn btn-outline btn-accent" type="button" onClick={handleButton}>Save</button>
        <button className="btn btn-outline btn-error" type="button" onClick={handleReset}>Reset</button>
      </div>
      <h2 className="text-xl font-semibold mb-4">Messages:</h2>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <AnimatePresence>
          {savedNotes.map((savedNote, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.5 }}
              className="card w-full bg-base-100 shadow-xl"
            >
              <div className="card-body">
                <p>{savedNote}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Save;
