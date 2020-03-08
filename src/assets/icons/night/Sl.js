import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

function SvgSl(props: any) {
    return (
        <Svg width={200} height={200} {...props}>
            <G fill="none" fillRule="evenodd">
                <Path
                    d="M117.328 42.17c24.65 0 44.634 20.127 44.634 44.955 0 .51-.009 1.016-.025 1.521a23.103 23.103 0 0112.088 20.35c0 12.75-10.262 23.085-22.92 23.085H134.5a6.026 6.026 0 00-3.007-4.884s-.498-.276-1.253-.79a6.037 6.037 0 00-3.008-5.653 6.05 6.05 0 00-6.526.309c-.703-.456-5.972-3.306-5.972-3.306s5.01-2.558 6.054-3.249a6.046 6.046 0 009.44-5.544c1.227-.722 1.265-.648 1.265-.648l.203-.122a6.04 6.04 0 002.003-8.125 6.045 6.045 0 00-8.25-2.214s-.135.104-1.308.69a6.046 6.046 0 00-9.407 5.518c-1.075.643-5.648 3.424-5.648 3.424s.012-5.924.064-6.737a6.038 6.038 0 00-.078-10.89c.03-1.06.014-1.446.014-1.446 0-3.328-2.709-6.033-6.044-6.033-3.333 0-6.044 2.7-6.044 6.033 0 0 .015.127.006 1.448a6.039 6.039 0 00.028 10.934c-.05 1.41-.038 5.6-.034 6.514v.177s-4.508-2.66-5.644-3.465a6.038 6.038 0 00-3.004-5.702 6.05 6.05 0 00-6.43.243c-1.057-.533-1.252-.68-1.28-.705a6.047 6.047 0 00-8.255 2.21 6.036 6.036 0 002.207 8.248s.274 0 1.26.688a6.038 6.038 0 003 5.755 6.05 6.05 0 006.473-.271c.62.5 6.476 3.269 6.476 3.269s-4.932 2.48-6.43 3.3a6.047 6.047 0 00-9.524 5.379c-1.02.537-1.255.761-1.255.761a6.03 6.03 0 00-3.007 4.884H60.632c-17.322 0-31.364-14.143-31.364-31.59S43.31 68.9 60.632 68.9a31.048 31.048 0 0114.491 3.567c6.033-17.632 22.65-30.298 42.205-30.298zM97 128.194s-.041 2.036-.035 3.886h-5.593a6.026 6.026 0 00-.02-.64c1.14-.856 5.648-3.246 5.648-3.246zm12.083 3.886a511.01 511.01 0 01.005-3.777v-.109s4.688 2.726 5.651 3.214c-.02.224-.028.448-.024.672z"
                    fill="#FFF"
                />
                <Path
                    d="M132.024 41.326c0 18.452 14.969 33.411 33.434 33.411a33.66 33.66 0 005.905-.52c-5.996 7.605-15.241 12.478-25.614 12.478-18.076 0-32.73-14.802-32.73-33.06 0-15.796 10.969-29.005 25.632-32.28a33.247 33.247 0 00-6.627 19.97z"
                    fill="#000"
                    fillOpacity={0.6}
                />
                <Path
                    d="M168.302 34.93c.014.015-3.195-4.105-3.195-4.105-.398-.511-.3-.599.215-.199l4.1 3.187c.918.656 1.288.887 1.536 1.06.243-.171.604-.392 1.54-1.06-.014.014 4.109-3.193 4.109-3.193.511-.398.598-.3.198.214l-3.188 4.097c-.657.919-.888 1.288-1.06 1.535.17.244.391.604 1.06 1.54a3693.25 3693.25 0 003.195 4.106c.398.51.3.598-.215.198l-4.1-3.186c-.919-.657-1.289-.887-1.536-1.06-.243.17-.604.392-1.54 1.06.014-.014-4.109 3.193-4.109 3.193-.511.398-.599.3-.198-.215l3.188-4.096c.657-.92.888-1.289 1.06-1.536-.17-.243-.391-.604-1.06-1.54zM33.372 18.353c-.374-.532-.856-1.319-2.315-3.36.03.03-6.985-8.976-6.985-8.976-.863-1.108-.645-1.292.479-.42l8.948 6.956c2.007 1.432 2.814 1.935 3.353 2.313.532-.373 1.32-.855 3.363-2.313-.03.03 8.981-6.98 8.981-6.98 1.11-.863 1.294-.644.42.478l-6.96 8.942c-1.433 2.005-1.936 2.813-2.314 3.351.373.532.856 1.32 2.315 3.36-.03-.03 6.984 8.976 6.984 8.976.863 1.108.645 1.293-.478.42l-8.948-6.955c-2.007-1.433-2.815-1.936-3.354-2.313-.532.372-1.32.855-3.362 2.313.03-.03-8.982 6.98-8.982 6.98-1.109.862-1.294.644-.42-.478l6.96-8.943c1.433-2.005 1.937-2.812 2.315-3.351z"
                    fill="#FFF"
                />
                <Path
                    d="M99.682 153.661l.166.039a2.588 2.588 0 011.828 3.183l-9.826 36.645a2.6 2.6 0 01-3.01 1.882l-.166-.039a2.588 2.588 0 01-1.828-3.182l9.826-36.646a2.6 2.6 0 013.01-1.882zm-11.59-13.438l.166.039a2.594 2.594 0 011.83 3.174l-11.395 42.498a2.595 2.595 0 01-3.007 1.872l-.166-.038a2.594 2.594 0 01-1.83-3.174l11.394-42.498a2.595 2.595 0 013.008-1.873zm40.865-.193l.166.039a2.594 2.594 0 011.83 3.174l-11.395 42.497a2.595 2.595 0 01-3.007 1.873l-.166-.039a2.594 2.594 0 01-1.83-3.174l11.394-42.497a2.595 2.595 0 013.008-1.873zm-12.657 0l.166.039a2.587 2.587 0 011.833 3.166l-7.377 27.51a2.59 2.59 0 01-3.006 1.866l-.165-.038a2.587 2.587 0 01-1.833-3.167l7.377-27.51a2.59 2.59 0 013.005-1.866zm-41.396-.168l.166.039a2.587 2.587 0 011.832 3.166l-7.376 27.511a2.59 2.59 0 01-3.006 1.865l-.165-.038a2.587 2.587 0 01-1.833-3.167l7.376-27.51a2.59 2.59 0 013.006-1.866zm66.598-.11l.166.04a2.59 2.59 0 011.83 3.172l-4.244 15.83a2.594 2.594 0 01-3.007 1.872l-.166-.039a2.59 2.59 0 01-1.831-3.173l4.245-15.83a2.594 2.594 0 013.007-1.871z"
                    fill="#ADE8FF"
                />
                <Path
                    d="M103.043 85.832a2.59 2.59 0 012.59 2.582v4.32h.86a2.593 2.593 0 012.594 2.589 2.59 2.59 0 01-2.593 2.589h-.86v15.36l13.312-7.68-.43-.744a2.59 2.59 0 114.486-2.589l.43.745 3.745-2.16a2.59 2.59 0 012.59 4.483l-3.744 2.16.43.745a2.59 2.59 0 11-4.486 2.589l-.43-.745-13.314 7.68 13.313 7.682.43-.745a2.595 2.595 0 013.54-.95 2.588 2.588 0 01.947 3.538l-.43.745 3.744 2.16a2.586 2.586 0 01.943 3.533 2.592 2.592 0 01-3.533.95l-3.745-2.16-.43.745a2.595 2.595 0 01-3.54.95 2.588 2.588 0 01-.946-3.538l.43-.745-13.313-7.681v15.362h.86a2.593 2.593 0 012.594 2.588 2.59 2.59 0 01-2.593 2.589h-.86v4.32a2.59 2.59 0 01-5.18 0l-.001-4.32h-.86a2.593 2.593 0 01-2.594-2.589 2.59 2.59 0 012.593-2.588h.86V122.24l-13.312 7.68.43.746a2.59 2.59 0 11-4.486 2.588l-.43-.745-3.744 2.16a2.59 2.59 0 01-2.59-4.483l3.744-2.16-.43-.745a2.59 2.59 0 114.486-2.588l.43.745 13.311-7.682-13.31-7.68-.431.745a2.595 2.595 0 01-3.54.95 2.588 2.588 0 01-.947-3.539l.43-.745-3.744-2.16a2.586 2.586 0 01-.942-3.533 2.592 2.592 0 013.533-.95l3.744 2.16.43-.745a2.595 2.595 0 013.54-.95 2.588 2.588 0 01.947 3.539l-.43.744 13.311 7.68v-15.36h-.86A2.593 2.593 0 0197 95.323a2.59 2.59 0 012.593-2.588h.86v-4.321a2.588 2.588 0 012.591-2.582z"
                    fill="#FFF"
                />
            </G>
        </Svg>
    );
}

export default SvgSl;
