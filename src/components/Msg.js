import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

import styled from "styled-components";

const MsgContainer = styled.div`
  height: 129px;
  width: 516px;
  border: 1px solid #e8e4e4;
  background-color: #ffecec;
  margin-left: auto;
  margin-right: auto;
`;

const ContentSection = styled.div`
  display: flex;
  height: 100px;
`;

const ContentText = styled.p`
  margin-left: 20px;
  margin-top: 20px;
`;

const AuthorText = styled.p`
  margin: auto 20px 20px auto;
  font-family: Inter;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
`;

const ButtonsSection = styled.div`
  margin: auto 20px 20px auto;
  height: 29px;
  display: flex;
  justify-content: end;
  color: red;
`;

export const Msg = ({ txt }) => {
  return (
    <MsgContainer>
      <ContentSection>
        <ContentText>{txt}</ContentText>
        <AuthorText>{txt}</AuthorText>
      </ContentSection>
      <ButtonsSection>
        <div style={{ marginLeft: "auto", marginRight: "10px" }}>
          <FontAwesomeIcon icon={faCoffee} />
        </div>
        <div style={{ marginLeft: "10px", marginRight: "10px" }}>
          <FontAwesomeIcon icon={faCoffee} />
        </div>
      </ButtonsSection>
    </MsgContainer>
  );
};
