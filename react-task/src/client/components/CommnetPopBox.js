import React from 'react';
const CommnetPopBox = props => {
  const { handler, data } = props;
  return (
    <>
      <div
        id="modal1"
        className="modal"
        style={{
          zIndex: 1003,
          display: 'block',
          opacity: 1,
          top: 10,
          width: '95vw',
          height: '95vh',
          maxHeight: '95vh'
        }}
      >
        <div className="modal-footer">
          <button
            type="button"
            onClick={handler}
            className="modal-close waves-effect waves-green btn red"
          >
            Close
          </button>
        
        </div>
        <div className="section">
          <h3> commens</h3>
        </div>
        {
          data.map((comment ,key)=>{
            return(
              <div className="modal-content">
                 <h4>{comment.name}</h4>
           <p>{comment.body}</p>
          <div className="divider" />
          <div className="section">
          </div>
      
                 </div>
            )
          })
        }
         {
          data.length<=0 ? <h3>NO comments found</h3>:null
         }

      </div>

      <div
        role="presentation"
        onClick={handler}
        className="modal-overlay"
        style={{ zIndex: 1002, display: 'block', opacity: 0.5 }}
      />
    </>
  );
};



export default CommnetPopBox;
