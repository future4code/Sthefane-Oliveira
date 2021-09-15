import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/155'}
        />
                <Post
          nomeUsuario={'leticia'}
          fotoUsuario={'https://picsum.photos/50/60'}
          fotoPost={'https://picsum.photos/200/159'}
        />
                <Post
          nomeUsuario={'luiz'}
          fotoUsuario={'https://picsum.photos/50/90'}
          fotoPost={'https://picsum.photos/200/153'}
        />
      </MainContainer>
    );
  }
}



export default App;
