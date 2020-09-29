import React, {Fragment, useContext} from 'react'
import {Search} from '../components/Search'
import {Card} from '../components/Card'
import {GithubContext} from "../context/github/githubContext";
import Loader from "../components/Loader/Loader";

export const Home = () => {
 const {loading , users} = useContext(GithubContext);
  return (
    <Fragment>
      <Search />

      <div className="row">
          {loading
          ? <p className={'text-center'}><Loader/></p>
          : users.map(user => (
              <div className="col-sm-4 mb-4" key={user.id}>
                          <Card user={user}/>
              </div>
                  ))}


      </div>

    </Fragment>
  )
};
