import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FunctionsIcon from '@mui/icons-material/Functions';
import Tooltip from '@mui/material/Tooltip';

const Contact = () => {
	return (
		<>
			<div className="row contact-pt-pb">
				<div className="col-sm-12 col-md-12 pt-5 pb-5">
					<h1 className="padLeft-11"><b>Contact</b></h1>
				</div>
				<div className="row padLeft-12 ">
					<div className='col-sm-4 col-md-6'>
						<b className='text-secondary'>Drop by to say hi :D | </b> <a href="mailto: shahrozdaniel@outlook.com" className="email"><b>shahrozdaniel@outlook.com</b></a>
					</div>

					<div className="col-sm-12 col-md-12" style={{ paddingTop: "5%" }}>
						<div className='col-sm-2 col-md-2 d-flex justify-content-between'>
							<div>
								<Tooltip title="Github">
									<a href='https://github.com/danielrepos' target={"_blank"} className="mr-2">
										<GitHubIcon fontSize="large" sx={{ color: "#9d9d9d" }} />
									</a>
								</Tooltip>
							</div>

							<div>
								<Tooltip title="Gmail">
									<a href='mailto: shahrozd3@gmail.com' target={"_blank"} className="mr-2">
										<FunctionsIcon fontSize="large" sx={{ color: "#9d9d9d", transform: "rotate(90deg)" }} />
									</a>
								</Tooltip>
							</div>

							<div>
								<Tooltip title="Instagram">
									<a href='#' target={"_blank"} className="mr-2">
										<InstagramIcon fontSize="large" sx={{ color: "#9d9d9d" }} />
									</a>
								</Tooltip>
							</div>

							<div>
								<Tooltip title="WhatsApp">
									<a href='tel:+917830447083' target={"_blank"} className="mr-2">
										<WhatsAppIcon fontSize="large" sx={{ color: "#9d9d9d" }} />
									</a>
								</Tooltip>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Contact