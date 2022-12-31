export type Post = {
  id: number;
  title: string;
  body: string;
};

export type PostFormType = Omit<Post, "id">;
