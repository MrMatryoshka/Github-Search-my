import React,{useContext,useEffect,Fragment} from 'react'
import {GithubContext} from "../context/github/githubContext";
import Loader from "../components/Loader/Loader";
import {Link} from "react-router-dom";
import {Repos} from "../components/Repos";

export const Profile = ({match}) => {

    const {getUser,getRepos , loading,user,repos} = useContext(GithubContext);
    const urlName = match.params.name;
    useEffect(
        () =>{

            getUser(urlName );
            getRepos(urlName );
            // eslint-disable-next-line
        } , []
    );

    if(loading){
        return (<Loader/>)
    }

    const {
        name, company , avatar_url ,
        location, bio, blog,
        login, html_url , followers, following,
        public_repos , public_gists
    } =user;

    return (
    <Fragment>
        <Link to={'/'} className={'btn btn-link'}>На главную</Link>
        <div className={'card mb-4'}>
            <div className={'car-body'}>
                <div className={'row'}>
                    <div className={'col-sm-3 text-center'}>
                        <img src={avatar_url} alt={name}  style={{width: '150px'}}/>
                        <h1>{name}</h1>
                        {location && <p>Местоположение : {location}</p>}
                    </div>
                    <div className={'col'}>
                        {
                            bio && <Fragment>
                                <h3>BIO</h3>
                                <p>{bio}</p>
                            </Fragment>
                        }
                        <a
                            href={html_url}
                            target={'_blank'}
                            rel={'noopener nofeferrer'}
                            className={'btn btn-dark'}>
                            Открыть профиль
                        </a>

                        <ul>
                            {login && <li> <strong>UserName</strong> {login}</li>}
                            {company && <li> <strong>Company</strong> {company}</li>}
                            {blog && <li> <strong>Website</strong> {blog}</li>}
                        </ul>
                        <div className={'badge badge-primary'}>Подписчики :{followers}</div>
                        <div className={'badge badge-success'}>Подписки :{following}</div>
                        <div className={'badge badge-info'}>Репозиторий  :{public_repos}</div>
                        <div className={'badge badge-dark'}>Gists :{public_gists}</div>


                    </div>
                </div>
            </div>
        </div>
       <Repos repos={repos}/>
    </Fragment>
  )
};
