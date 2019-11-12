deleteTrip = (tripId) => {
    console.log('deleting')
    axios.delete(`/api/trip/${this.props.match.params.tripId}`, tripId)
}
comboDeleteAndRedirect= () => {
    this.deleteTrip()
    this.setTheRedirect()
    // .then(()=>{this.setTheRedirect()})
}
setTheRedirect = () => {
    console.log('setting state')
    this.setState({
        redirect: true
    })
}      
renderRedirect = () => {
    if (this.state.redirect === true)
            {return <Redirect to='/trips' />}}
