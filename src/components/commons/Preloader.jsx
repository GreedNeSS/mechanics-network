import preloader from "../../img/preloader1.svg";


const Preloader = () => {
	return (
		<div style={{ width: '100px', height: '100px', position: 'fixed', left: '50%', top: '50%' }}>
			<img src={preloader} alt="" />
		</div>
	)
}

export default Preloader;