export default function Tabs({ children, buttons ,ButtonsContainer ='menu'}) {
    //const ButtonsContainer = buttonContainer;
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
