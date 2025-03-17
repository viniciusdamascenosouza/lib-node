function handlesErrors(error) {
  if (error.code === "ENOENT") {
    throw new Error("file not found");
  } else "Error in aplication";
}

export default handlesErrors;
