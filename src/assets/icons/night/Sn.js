import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgSn(props: any) {
    return (
        <Svg width={200} height={200} {...props}>
            <Path
                d="M99.852 0c4.487 0 8.123 3.642 8.123 8.088v13.534h2.7c4.49 0 8.131 3.639 8.131 8.108 0 4.478-3.635 8.108-8.132 8.108h-2.699v48.118l41.75-24.059-1.35-2.333a8.11 8.11 0 012.969-11.083 8.132 8.132 0 0111.1 2.975l1.35 2.333 11.742-6.767c3.876-2.233 8.84-.892 11.079 2.978 2.243 3.878.901 8.843-2.956 11.066l-11.742 6.767 1.35 2.332a8.11 8.11 0 01-2.97 11.084 8.132 8.132 0 01-11.1-2.975l-1.35-2.333L116.097 100l41.75 24.06 1.35-2.334c2.245-3.882 7.223-5.21 11.1-2.975a8.1 8.1 0 012.97 11.084l-1.35 2.332 11.742 6.767c3.876 2.234 5.194 7.196 2.956 11.066-2.243 3.878-7.222 5.2-11.079 2.978l-11.742-6.767-1.35 2.333c-2.245 3.882-7.223 5.21-11.1 2.975a8.1 8.1 0 01-2.97-11.083l1.35-2.333-41.749-24.06v48.12h2.7c4.49 0 8.131 3.638 8.131 8.107 0 4.478-3.635 8.108-8.132 8.108h-2.699v13.534c0 4.467-3.646 8.088-8.123 8.088-4.486 0-8.123-3.642-8.123-8.088v-13.534h-2.698c-4.492 0-8.132-3.639-8.132-8.108 0-4.478 3.634-8.108 8.132-8.108h2.698v-48.119l-41.748 24.06 1.349 2.333a8.11 8.11 0 01-2.969 11.083 8.132 8.132 0 01-11.1-2.975l-1.35-2.333-11.742 6.767c-3.876 2.233-8.84.892-11.079-2.978-2.243-3.878-.902-8.843 2.956-11.066l11.742-6.767-1.35-2.332a8.11 8.11 0 012.97-11.084 8.132 8.132 0 0111.1 2.975l1.35 2.333L83.606 100l-41.75-24.058-1.349 2.333c-2.246 3.882-7.223 5.21-11.1 2.975a8.1 8.1 0 01-2.97-11.084l1.35-2.332-11.742-6.767C12.17 58.832 10.85 53.87 13.09 50c2.243-3.878 7.221-5.2 11.079-2.978L35.91 53.79l1.35-2.333c2.245-3.882 7.223-5.21 11.1-2.975a8.1 8.1 0 012.969 11.083l-1.35 2.333L91.73 85.956V37.838h-2.698c-4.492 0-8.132-3.64-8.132-8.108 0-4.478 3.634-8.108 8.132-8.108h2.698V8.088C91.73 3.62 95.375 0 99.852 0z"
                fill="#FFF"
                fillRule="evenodd"
            />
        </Svg>
    );
}

export default SvgSn;
