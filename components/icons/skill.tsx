import Link from "next/link";
import Image from "next/image";

export type SkillProps = {
  src: string;
  alt: string;
  height?: number;
  width?: number;
  url: string;
}

const skillSize = {width: 20, height:20}
export const skillsDirectory: Record<string, SkillProps> = {
  python: {...skillSize, src: "/skills/python-icon.svg", alt: "Python", url: "https://www.python.org/doc/"},
  java: {...skillSize, src: "/skills/java-icon.svg", alt: "Java", url: "https://dev.java/"},
  typescript: {...skillSize, src: "/skills/typescriptlang-icon.svg", alt: "Typescript", url: "https://www.typescriptlang.org/"},
  nextjs: {...skillSize, src: "/skills/nextjs-icon.svg", alt: "Next.js", url:"https://nextjs.org/"},
  tailwindcss: {...skillSize, src: "/skills/tailwindcss-icon.svg", alt: "TailwindCSS", url: "https://tailwindcss.com/"},
  pytorch: {...skillSize, src: "/skills/pytorch-icon.svg", alt: "PyTorch", url: "https://pytorch.org/"},
  tensorflow: {...skillSize, src: "/skills/tensorflow-icon.svg", alt: "TensorFlow", url: "https://www.tensorflow.org/"},
  fastapi: {...skillSize, src: "/skills/fastapi-icon.svg", alt: "FastAPI", url: "https://fastapi.tiangolo.com/"},
  django: {...skillSize, src: "/skills/djangoproject-icon.svg", alt: "Django", url: "https://www.djangoproject.com/"},
  flask: {...skillSize, src: "/skills/flask-icon.svg", alt: "Flask", url: "https://flask.palletsprojects.com/en/3.0.x/"},
  aws: {...skillSize, src: "/skills/aws-icon.svg", alt: "AWS", url: "https://aws.amazon.com/"},
  docker: {...skillSize, src: "/skills/docker-icon.svg", alt: "Docker", url: "https://docs.docker.com/"},
  torchserve: {...skillSize, src: "/skills/torchserve-icon.svg", alt: "TorchServe", url: "https://pytorch.org/serve/"},
  lightning: {...skillSize, src: "/skills/lightning-icon.svg", alt: "PyTorch Lightning", url: "https://lightning.ai/docs/pytorch/stable/"},
  springboot: {...skillSize, src: "/skills/springboot-icon.svg", alt: "Spring Boot", url: "https://spring.io/projects/spring-boot"},
  huggingface: {...skillSize, src: "/skills/huggingface-logo.svg", alt: "HuggingFace", url: "https://huggingface.co/"},
  aws_ec2: {...skillSize, src:"/skills/amazon_ecs-icon.svg", alt:"AWS EC2", url:"https://aws.amazon.com/ec2/"},
  matlab: {...skillSize, src:"/skills/matlab-icon.svg", alt:"MATLAB", url:"https://mathworks.com/products/matlab.html"},
  javascript: {...skillSize, src:"/skills/javascript-icon.svg", alt:"Javascript", url:"https://developer.mozilla.org/en-US/docs/Web/JavaScript"},
}

export function Skill ({src, alt, width=50, height=50, url}: SkillProps) {
  return (
    <Link 
      href={url} 
      target="_blank"
    >
      <Image
        className="grayscale hover:grayscale-0 transition-all duration-200"
        src={src}
        alt={alt}
        width={width}
        height={height}
        title={alt}
      />
    </Link>
  )
}
