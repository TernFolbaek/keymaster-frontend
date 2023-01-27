import styled from "styled-components";

const Tips = () =>{
    return (
        <div>
            <$ImageTextContainer>
                <$Text>Practice regularly: The more you type, the faster you will become. Set aside time each day to practice typing, and try to increase your speed over time.</$Text>
                <$Image> <img src="/images/routine.jpeg" className="tips-images"/></$Image>
            </$ImageTextContainer>

            <$ImageTextContainer>
                <$Image><img src="/images/posture.jpeg" className="tips-images"/></$Image>
                <$Text>Use proper typing technique: Make sure you are sitting up straight and that your fingers are positioned correctly on the home row of the keyboard. This will help you type faster and more accurately.</$Text>
            </$ImageTextContainer>

            <$ImageTextContainer>
                <$Text>Look at the keyboard less: Try to focus on the screen and the words you are typing rather than looking down at the keyboard. This will help you develop muscle memory and allow you to type faster.</$Text>
                <$Image><img src="/images/look_up.jpeg" className="tips-images"/></$Image>
            </$ImageTextContainer>

            <$ImageTextContainer>
                <$Image><img src="/images/octopussy.jpeg" className="tips-images"/></$Image>
                <$Text>Use all of your fingers: Rather than just using a few fingers to type, try to use all of your fingers to type. This will allow you to type faster and with fewer errors.</$Text>
            </$ImageTextContainer>

            <$ImageTextContainer>
                <$Text>Use typing software or games: There are many typing software programs and games available that can help you practice and improve your typing skills. These can be a fun and effective way to improve your speed and accuracy.</$Text>
                <$Image><img src="/images/happy.jpeg" className="tips-images"/></$Image>
            </$ImageTextContainer>
        
        </div>
    )
}

const $ImageTextContainer = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai:wght@200&display=swap');    
    display: flex;
    gap: 5px;
    align-items: center;
    padding: 0 20%;
    margin-top: 20px;

`;

const $Image = styled.div`
    flex: 1;
`;

const $Text = styled.div`
    flex: 1;
    font-family: 'IBM Plex Sans Thai', sans-serif;
    font-size: 24px;
    color: white;
    padding: 20px;
`;

export default Tips;