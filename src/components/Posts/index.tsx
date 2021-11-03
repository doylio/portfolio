import * as React from "react";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { posts } from "./posts";
import {
  Card,
  Img,
  Subtitle,
  Title,
  Blurb,
  Content,
  Carousel,
} from "./PostsStyles";

export interface PostsProps {}

export default function Posts(props: PostsProps) {
  return (
    <Section id="posts">
      <SectionTitle>Posts</SectionTitle>
      <Carousel>
        {posts.map((post) => (
          <Card key={post.id} href={post.url}>
            <Img src={post.image} />
            <Content>
              <Title>{post.title}</Title>
              <Subtitle>{post.date}</Subtitle>
            </Content>
          </Card>
        ))}
      </Carousel>
      <SectionDivider />
    </Section>
  );
}
