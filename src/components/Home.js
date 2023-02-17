import React from 'react'

const Home = ({ user }) => {

	// const { user } = props

	return (
		<div className='container mt-5' style={{ marginBottom: "10%" }}>
			<div className="row">
				<div className="col-sm-9">
					<h5 className="hi">Hi there, I'm</h5>
					<h1 className="name">{user}</h1>
					<h3 className="port">Welcome, do enjoy your stay.</h3>
					<br />
					<p className="catch">"I don't intend to create something to impress, but to inspire."</p>
				</div>
				<div className="col-sm-3">
					{/* <!-- <div className="work-preview">
            work preview
          </div> --> */}
				</div>
			</div>
			{/* <div style={{ height: "50px" }}></div> */}
		</div>
	)
}

export default Home