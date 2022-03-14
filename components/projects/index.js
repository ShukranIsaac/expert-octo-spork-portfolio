import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './styles';
import { Section, SectionDivider, SectionTitle } from '../../styles/components';
import { projects } from '../../constants/index';

const Projects = () => (
    <Section nopadding id="projects">
        <SectionDivider colorAlt />
        <SectionTitle main>Projects</SectionTitle>
        <GridContainer>
            {projects.map((p, i) => {
                return (
                    <BlogCard key={i}>
                        <a href="/#"><Img src={p.image} /></a>
                        <TitleContent>
                            <HeaderThree title="">
                                <a href="/#">{p.title}</a>
                            </HeaderThree>
                            <Hr />
                        </TitleContent>
                        <CardInfo className="card-info">{p.description}</CardInfo>
                        <div>
                            <TitleContent>Tech. Stack</TitleContent>
                            <TagList>
                                {p.tags.map((t, i) => <Tag key={i}>{t}</Tag>)}
                            </TagList>
                        </div>
                        <UtilityList>
                            <ExternalLinks href={p.visit}>Code</ExternalLinks>
                            <ExternalLinks href={p.source}>Source</ExternalLinks>
                        </UtilityList>
                    </BlogCard>
                );
            })}
        </GridContainer>
    </Section>
);

export default Projects;