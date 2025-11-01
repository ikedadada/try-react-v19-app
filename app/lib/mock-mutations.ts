const sleep = (ms: number) =>
  new Promise<void>((resolve) => {
    setTimeout(resolve, ms);
  });

export async function updateUserName(newName: string) {
  await sleep(2000);
  if (!newName.trim()) {
    throw { message: "名前は必須です" };
  }

  return {
    name: newName,
  };
}

let nextCommentId = 1;

export async function addComment(text: string) {
  await sleep(1500);

  return {
    id: nextCommentId++,
    text,
  };
}
