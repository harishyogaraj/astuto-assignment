import Image from 'next/image';
import React, { useState } from 'react';
import like from './../../../public/images/like.png';

const Container = {
  padding: "20px",
  backgroundColor: "#f9f9f9",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "#F2F5F9"
};

const Question = {
  fontSize: "16px",
  paddingRight: "20px"
};

const OptionsContainer = {
  display: "flex",
};

const OptionLabel = {
  marginRight: "20px",
  cursor: "pointer",

};

const disLikeStyle = {
  transform: "rotate(180deg)"
}

const Feedback = () => {
  const [feedback, setFeedback] = useState('');

  return (
    <div style={Container}>
      {feedback ? (
        <div> {feedback === 'yes' ? 'Thank you for your feedback!' : 'Thank you for your feedback! Will Improve based on interest!'}   </div>
      ) : (
        <>
          <p style={Question}>Is this conversation helpful so far?</p>
          <div style={OptionsContainer}>
            <label style={OptionLabel}>
              <Image onClick={() => setFeedback('yes')} src={like} alt="arrow" width={15} height={15} />

            </label>
            <label style={OptionLabel}>
              <Image onClick={() => setFeedback('no')} style={disLikeStyle} src={like} alt="arrow" width={15} height={15} />
            </label>
          </div>

        </>
      )
      }
    </div>
  );
};

export default Feedback;
