import styled from 'styled-components/native';


export const Container = styled.View`
  flex: 1;
  display:flex;
  background-color: #2B7ECC;
`;

export const Espace = styled.View`
  height:${props => props.height} ;
  width: ${props => props.width} ;
`;
export const Title_text = styled.Text`
  font-size:20px;
  color: black;
  font-weight: 500;
`;

export const Wrapper = styled.View`
    height: 6px;
    width: 30px;
    border-width: 1px;
    border-radius: 10px;
    border-color: ${props => (props.primary ? '#2B7ECC' : 'white')};
    background-color: ${props => (props.primary ? '#2B7ECC' : 'white')};

`

export const Image_item = styled.Image`
width: 95%;
height: 92%;
border-radius: 30px;
align-self: center;
display: ${props => (props.display ? 'flex' : 'none')};
object-fit: cover ;

`;

export const Bouton = styled.TouchableOpacity`
flex: 1;
display: flex;
border-width: 1px;
border-left-width:${props => (props.primary ? "1px" : "0px")} ;
border-radius: 10px;
align-items: center;
justify-content: center;
background-color: ${props => (props.primary ? "white" : "#efebf9")};
position: relative;
left: ${props => (props.primary ? "15px" : "0px")};
z-index: ${props => (props.primary ? 2 : 1)};
border-color: white;


`;
