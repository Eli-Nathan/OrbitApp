import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

function SvgS(props: any) {
    return (
        <Svg width={200} height={200} {...props}>
            <G fill="none" fillRule="evenodd">
                <Path
                    d="M115.853 127.815h-54.61c-16.824 0-30.463-13.603-30.463-30.385 0-16.78 13.639-30.385 30.462-30.385 5.077 0 9.864 1.24 14.073 3.43 5.862-16.958 22.001-29.14 40.993-29.14 23.941 0 43.35 19.36 43.35 43.24 0 .49-.008.977-.025 1.463 6.99 3.745 11.74 11.105 11.74 19.573 0 12.263-9.966 22.204-22.26 22.204h-33.26.455-.455z"
                    fill="#FFF"
                />
                <Path
                    d="M130.634 40.848c0 17.898 14.546 32.408 32.489 32.408 1.958 0 3.876-.173 5.738-.504-5.826 7.375-14.81 12.102-24.89 12.102-17.565 0-31.805-14.357-31.805-32.066 0-15.322 10.658-28.134 24.908-31.31a32.209 32.209 0 00-6.44 19.37z"
                    fill="#000"
                    fillOpacity={0.6}
                />
                <Path
                    d="M165.887 34.645c.013.014-3.105-3.982-3.105-3.982-.387-.496-.292-.58.208-.193l3.984 3.09c.894.637 1.253.861 1.493 1.029.237-.166.588-.38 1.497-1.028-.014.013 3.993-3.097 3.993-3.097.497-.386.582-.291.193.208l-3.099 3.973c-.638.892-.862 1.25-1.03 1.49.166.236.38.586 1.03 1.493-.013-.014 3.105 3.983 3.105 3.983.387.495.292.58-.208.192l-3.984-3.09c-.893-.637-1.253-.86-1.493-1.029-.237.166-.587.38-1.497 1.028.014-.013-3.993 3.098-3.993 3.098-.497.385-.581.29-.193-.209l3.099-3.973c.638-.891.862-1.25 1.03-1.49-.166-.236-.38-.585-1.03-1.493zM34.768 18.566c-.363-.516-.832-1.28-2.25-3.26.03.03-6.787-8.705-6.787-8.705-.839-1.075-.626-1.254.465-.408l8.695 6.746c1.95 1.39 2.735 1.878 3.26 2.244.516-.361 1.282-.83 3.267-2.244-.03.03 8.728-6.77 8.728-6.77 1.077-.836 1.257-.625.408.464l-6.763 8.674c-1.393 1.945-1.883 2.728-2.25 3.25.363.516.832 1.28 2.25 3.26-.03-.03 6.787 8.705 6.787 8.705.839 1.075.626 1.254-.465.407l-8.695-6.746c-1.95-1.389-2.735-1.877-3.26-2.243-.516.361-1.282.83-3.267 2.243.03-.03-8.727 6.77-8.727 6.77-1.078.837-1.258.626-.409-.463l6.763-8.674c1.393-1.945 1.883-2.728 2.25-3.25z"
                    fill="#FFF"
                />
                <Path
                    d="M102.163 134.3l.132.03.135.04a2.537 2.537 0 011.638 3.069l-15.4 57.328a2.552 2.552 0 01-2.957 1.84l-.132-.032-.134-.04a2.537 2.537 0 01-1.639-3.068l15.4-57.328a2.552 2.552 0 012.957-1.84zm13.204-.22l.142.032.151.046a2.522 2.522 0 011.629 3.053l-7.154 26.632a2.535 2.535 0 01-2.94 1.832l-.156-.036-.138-.042a2.522 2.522 0 01-1.629-3.053l7.154-26.632a2.535 2.535 0 012.94-1.832zm-28.48-.163l.139.032.154.046a2.522 2.522 0 011.628 3.053l-7.154 26.632a2.535 2.535 0 01-2.94 1.832l-.153-.036-.14-.042a2.522 2.522 0 01-1.63-3.053l7.155-26.632a2.535 2.535 0 012.94-1.832zm42.888-.11l.161.038a2.513 2.513 0 011.777 3.088l-4.12 15.334a2.527 2.527 0 01-2.925 1.825l-.16-.037a2.513 2.513 0 01-1.777-3.088l4.12-15.334a2.527 2.527 0 012.924-1.825z"
                    fill="#ADE8FF"
                />
            </G>
        </Svg>
    );
}

export default SvgS;
