import React ,{useEffect,useState}from "react";
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";
import fs from "fs";
import Code from "../../component/Code";
// import { user} from "../assets/username";
import { user} from "../../assets/username";
import { useRouter } from "next/router";

//stlye
import layout from "../../styles/tailwind/layout";

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
  const {container} = layout();

  const [valid, setValid] = useState(false);
  const round =useRouter();

  useEffect(()=>{
    if(localStorage.getItem("token") === `${user.id}_${user.password}_valid` ){
      setValid(true);
      console.log(valid);
    }else{
      round.push('/login');
    }
  },[]);

  if(valid){
    return (
    <div className={container}>
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
  return (
    <div className={container}>
      
    </div>
  )
  
}

export default Doc;
