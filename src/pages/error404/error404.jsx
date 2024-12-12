import React from "react";
import "./__error404.scss";

export default function Error404() {
	return (
		<div className='not-found'>
			<h1>404: Page no found</h1>
			<div className='bash'>
				<pre>
					{`$ cd basillecorp.dev
$ ls
404_error_page.sh      projects/          contact/
$ cat 404_error_page.sh
#!/bin/bash
echo "Oops, cette page n'existe pas. 🫠"
echo "Retournez à la page d'accueil ?"
echo -e "-> `}
					<a href='./' className='link'>
						https://basillecorp.dev
					</a>
					{` 

_`}
					<span className='blinking'>|</span>
				</pre>
			</div>
		</div>
	);
}
