import classes from './Layout.module.css'
import MainNavigation from './MainNavigation';

function Layout(props){
    return(
        <div> 
            <MainNavigation />
            <main className={classes.name}>
                {props.children}
            </main>
        </div>
    )
}

export default Layout;