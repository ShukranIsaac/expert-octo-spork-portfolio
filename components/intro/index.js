import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/components';
import Button from '../../styles/components/button';
import { LeftSection } from './styles';

const ProfileIntro = (props) => (
    <>
        <Section row nopadding>
            <LeftSection>
                <SectionTitle main center>
                    Welcome To <br />
                    My Personal Portfolio
                </SectionTitle>
                <SectionText>
                    Good teachers are good students, not merely sign posts. They explore the 'impossible' imaginations and realize limitless possibilities. 
                     They keep learning and sharing, before they become better and better.
                </SectionText>
                <Button onClick={props.handleClick}>Check my Resume</Button>
            </LeftSection>
        </Section>
    </>
);

export default ProfileIntro;