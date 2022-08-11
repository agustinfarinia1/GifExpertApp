export const FooterApp = () => {
    const url = 'https://github.com/agustinfarinia1';

    return(
        <div className="footer">
            <h4 style={{color:"gray"}}>Made by
                <a 
                    href={url}
                    style={{color:"black"}}>
                        Agustin
                </a>
            </h4>
        </div>
    );
}