import React from 'react'

export const AddMemberDetails = () => {
    return (
        <div className="justify-content-center middlestuff">
        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
        <div class="container px-1">
            <div class="row">
                <div class="col-md-9">
                    <p class="h5">Basic Info</p>
                    <div class="container mx-0">
                        <div class="row">
                            <div class="col-md-4 ml-0 pl-0 justify-content-center">
                                <div class="card card-body justify-content-center">
                                    <h1 class="h2">Picture</h1>
                                  </div>
                                  <div class="d-flex justify-content-center">
                                  <button class="btn btn-primary btn-large my-3">Upload File</button>
                                </div>
                            </div>
                            
                            <div class="col-md-8">
                                <form class="needs-validation" novalidate>
                                    <div class="row">
                                      <div class="col-md-6 mb-3 p-2">
                                       
                                        <input type="text" class="form-control border " id="firstName" placeholder="First Name" value="" required/>
                                        <div class="invalid-feedback">
                                          Valid first name is required.
                                        </div>
                                      </div>
                                      <div class="col-md-6 mb-3 p-2">
                                      
                                        <input type="text" class="form-control border " id="lastName" placeholder="Last Name" value="" required/>
                                        <div class="invalid-feedback">
                                          Valid last name is required.
                                        </div>
                                      </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-9 mb-3 p-2">
                                        
                                          <input type="email" class="form-control border " id="email" placeholder="Email" value="" required/>
                                          <div class="invalid-feedback">
                                            Valid first name is required.
                                          </div>
                                        </div>
                        
                                      </div>

                                      <div class="row">
                                        <div class="col-md-9 mb-3 p-2">
                                          <label for="dob">Date of Birth</label>
                                          <input type="date" class="form-control border " id="dob" placeholder="dd/mm/yyyy" value="" required/>
                                          <div class="invalid-feedback">
                                            Valid first name is required.
                                          </div>
                                        </div>
                        
                                      </div>

                                      <div class="row">
                                        <div class="col-md-6 mb-3 p-2">
                                          
                                          <input type="tel" class="form-control border " id="phonenumber" placeholder="Phone Number" value="" required/>
                                          <div class="invalid-feedback">
                                            Valid first name is required.
                                          </div>
                                        </div>

                                        <div class="col-md-6 mb-3 p-2">
                                           
                                            <input type="tel" class="form-control border " id="whatsappnumber" placeholder="WhatsApp" value="" required/>
                                            <div class="invalid-feedback">
                                              Valid first name is required.
                                            </div>
                                          </div>
                        
                                      </div>

                                      <div class="row">
                                        <div class="col-md-9 mb-3 p-2">
                                          
                                          <select class="custom-select border">
                                            <option selected>Marital Status</option>
                                            <option value="1">Single</option>
                                            <option value="2">Married</option>
                                            
                                          </select>
                                        </div>
                        
                                      </div>

                                      <div class="row">
                                        <div class="col-md-9 mb-3 p-2">
                                         
                                          <select class="custom-select border">
                                            <option selected>Profession</option>
                                            <option value="1">Doctor</option>
                                            <option value="2">Lawyer</option>
                                           
                                          </select>
                                        </div>
                        
                                      </div>

                                     

                                    </form>
                                
                            </div>
                        </div>
                    </div>
                    </div>
                <div class="col-md-3">
                    <p class="h5 px-2">Church Info</p>
                    
                    
                        <div class="col mb-3 p-3">
                         <select class="custom-select border">
                            <option selected>Bacenta</option>
                            <option value="1">Columba</option>
                            <option value="2">Nyanyano</option>
                            
                          </select>
                        </div>


                            <div class="col mb-3 p-3">
                              
                              <select class="custom-select border">
                                <option selected>Ministry</option>
                                <option value="1">Doctor</option>
                                <option value="2">Lawyer</option>
                               
                              </select>
                            </div>

                            <div class="justify-content-center p-3 push align-bottom">
                                <button class="btn btn-primary btn-block my-3 align-baseline">Submit</button>
                            </div>
                        
                    </div>
                
                    </div>
            
                </div>
    </div>
        </div>
    )
}
