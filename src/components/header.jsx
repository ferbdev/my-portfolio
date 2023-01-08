import Wave from "react-wavify";
import styled from '@emotion/styled';
import { React } from "react";

const WaveContainerMaster = styled.div`
  position: relative;
`;

const WaveContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  height: ${(props) => props.level + 'vh'};
  display: flex;
`;

export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <WaveContainerMaster>
            <div className='row'>
              
              <div id='divInitialPresentation' className='col-md-8 col-md-offset-2 responsive-center'>
                <div className='responsive-logo'>
                  <img src='img/icon/logo_ferb.png' alt="logo"></img>
                </div>
                <h1>
                  {props.data ? props.data.title : 'Loading'}
                </h1>
                <p>{props.data ? props.data.paragraph : 'Loading'}</p>
                <a
                  href='#skills'
                  className='btn btn-custom btn-lg page-scroll'
                >
                  About
                </a>{' '}
              </div>
            </div>
            <WaveContainer level={11}>
              <Wave 
                fill='#ffffff' 
                paused={false}
                opacity='0.2'
                options={{
                  height:30,
                  amplitude:20,
                  speed: 0.35,
                  points: 6
                }}></Wave>
            </WaveContainer>
            <WaveContainer level={11}>
              <Wave 
                fill='#ffffff' 
                paused={false}
                opacity='0.5'
                options={{
                  height:30,
                  amplitude:20,
                  speed: 0.35,
                  points: 5
                }}></Wave>
            </WaveContainer>            
            <WaveContainer level={9.5}>
              <Wave 
                fill='#ffffff' 
                paused={false}
                opacity='1'
                options={{
                  height:30,
                  amplitude:20,
                  speed: 0.30,
                  points: 4
                }}></Wave>
            </WaveContainer>
          </WaveContainerMaster>
          
        </div>
      </div>
      
      
    </header>
  )
}
