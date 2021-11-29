#!/bin/sh

dlm="------------------------------------------------------------"
name=""
dir=""

if [[ ( "$#" != "2" ) && ( "$#" != "4" ) ]]
then
	echo "Wrong number of params"
	exit 1
else

	while [ -n "$1" ]; do
		
		case "$1" in
		-n)
			name="$2"
			shift
			;;
		-d)
			dir="$2"
			shift
			;;
		*) 
			echo "$* options is not recognized"
			exit 1
			;;
		esac

		shift

	done

	# Creating files
	# --------------
	touch ""$dir"$name.module.css"
	touch ""$dir"$name.tsx"

	# Creating text of react arrow function component in .tsx file
	# -----------------------------------------------------------
	echo "import React from 'react';
import styles from "\""./"$name".module.css"\"";

interface "$name"Props {

}

const $name: React.FC<"$name"Props> = ({}) => {
	return (
	  <div className={styles.tmp}>
				
	  </div>
	)
}

export default $name;" > ""$dir"$name.tsx"

	# Creating temporary style in .module.css file
	# -----------------------------------------------------------
	echo ".tmp {

}" > ""$dir"$name.module.css"


	printf "\n$dlm\nCreated: \n	$name.tsx \n	$name.module.css \n"
	if [[ ("$dir" != "") ]]
	then 
		echo "At: "
		echo "	$dir"
	fi
	echo "$dlm"
fi