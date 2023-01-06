return (
    <>
    <Router>
    <Navbar title="Word" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container"></div>
    <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
          <TextForm showAlert={showAlert} heading="enter text to anylyze below" mode={mode}/> 
          </Route>
       
        </Switch>
    
    <About/>
    </Router> 
    </>
  );