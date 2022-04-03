import { useReducer, useEffect, useState } from "react";
import { projectFirestore } from "../firebase/config";

const initialState = {
  document: null,
  isPending: false,
  error: null,
  success: null,
};

const firestoreReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const useFirestore = (collection) => {
  const [response, dispatch] = useReducer(firestoreReducer, initialState);
  const [isCancelled, setIsCancelled] = useState(false);

  // Collection ref
  const ref = projectFirestore.collection(collection);

  // Add document
  const addDocument = (doc) => {};

  // Delete document
  const deleteDocument = (id) => {};

  // Cleanup function 
  useEffect(() => {
    return () => {
      setIsCancelled(true);
    };
  }, []);

  return { addDocument, deleteDocument, response };
};
