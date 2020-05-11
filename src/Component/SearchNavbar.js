import React from 'react'

function SearchNavbar() {
    return (
        <>
            <nav class="navbar navbar-light" >
                <div class="container d-flex justify-content-center">
                    <form class="form-inline my-auto">
                        <div class="input-group">
                            <input type="search" class="form-control form-control-lg" id="inlineFormInputGroup" placeholder="Search" />
                            <div class="input-group-append"><button class="btn btn-primary" type="button"><i class="fa fa-search"></i></button></div>
                        </div>
                    </form>
                </div>
            </nav>
        </>
    )
}

export default SearchNavbar
