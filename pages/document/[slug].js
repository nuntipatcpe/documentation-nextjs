import React from "react";
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";
import fs from "fs";
import Code from "../../component/Code";

import { useRouter } from "next/router";

export async function getStaticPaths() {
  const files = fs.readdirSync("doc");

  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params: { slug } }) {
  const fileName = fs.readFileSync(`doc/${slug}.md`, "utf-8");
  const { content } = matter(fileName);

  if (false) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {
      content,
    },
  };
}

function Doc({ content }) {
  // const router = useRouter();
  // // if(router.fallback){

  // // }
  // console.log(router);

  return (
    <div className="max-w-[720px] w-[720px] p-10 bg-neutral-50 overflow-auto">
      <Markdown
        className={
          "prose prose-neutral prose-a:text-blue-700 hover:prose-a:text-blue-500"
        }
        options={{
          overrides: {
            code: {
              component: Code,
            },
          },
        }}
      >
        {content}
      </Markdown>
    </div>
  );
}

export default Doc;
