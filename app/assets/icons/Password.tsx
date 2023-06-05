import Svg from '~/components/styles/Svg.styles';

const Bold = ({ color }: { color: string }) => (
  <g>
    <path
      d="M18.75 8V10.1C18.31 10.04 17.81 10.01 17.25 10V8C17.25 4.85 16.36 2.75 12 2.75C7.64 2.75 6.75 4.85 6.75 8V10C6.19 10.01 5.69 10.04 5.25 10.1V8C5.25 5.1 5.95 1.25 12 1.25C18.05 1.25 18.75 5.1 18.75 8Z"
      fill={color}
    />
    <path
      d="M18.75 10.1C18.31 10.04 17.81 10.01 17.25 10H6.75C6.19 10.01 5.69 10.04 5.25 10.1C2.7 10.41 2 11.66 2 15V17C2 21 3 22 7 22H17C21 22 22 21 22 17V15C22 11.66 21.3 10.41 18.75 10.1ZM8.71 16.71C8.52 16.89 8.26 17 8 17C7.87 17 7.74 16.97 7.62 16.92C7.49 16.87 7.39 16.8 7.29 16.71C7.11 16.52 7 16.26 7 16C7 15.87 7.03 15.74 7.08 15.62C7.13 15.5 7.2 15.39 7.29 15.29C7.39 15.2 7.49 15.13 7.62 15.08C7.99 14.92 8.43 15.01 8.71 15.29C8.8 15.39 8.87 15.5 8.92 15.62C8.97 15.74 9 15.87 9 16C9 16.26 8.89 16.52 8.71 16.71ZM12.92 16.38C12.87 16.5 12.8 16.61 12.71 16.71C12.52 16.89 12.26 17 12 17C11.73 17 11.48 16.89 11.29 16.71C11.2 16.61 11.13 16.5 11.08 16.38C11.03 16.26 11 16.13 11 16C11 15.73 11.11 15.48 11.29 15.29C11.66 14.92 12.33 14.92 12.71 15.29C12.89 15.48 13 15.73 13 16C13 16.13 12.97 16.26 12.92 16.38ZM16.71 16.71C16.52 16.89 16.26 17 16 17C15.74 17 15.48 16.89 15.29 16.71C15.11 16.52 15 16.27 15 16C15 15.73 15.11 15.48 15.29 15.29C15.67 14.92 16.34 14.92 16.71 15.29C16.75 15.34 16.79 15.39 16.83 15.45C16.87 15.5 16.9 15.56 16.92 15.62C16.95 15.68 16.97 15.74 16.98 15.8C16.99 15.87 17 15.94 17 16C17 16.26 16.89 16.52 16.71 16.71Z"
      fill={color}
    />
  </g>
);

const Light = ({ color }: { color: string }) => (
  <g>
    <path
      d="M18 10.75C17.59 10.75 17.25 10.41 17.25 10V8C17.25 4.85 16.36 2.75 12 2.75C7.64 2.75 6.75 4.85 6.75 8V10C6.75 10.41 6.41 10.75 6 10.75C5.59 10.75 5.25 10.41 5.25 10V8C5.25 5.1 5.95 1.25 12 1.25C18.05 1.25 18.75 5.1 18.75 8V10C18.75 10.41 18.41 10.75 18 10.75Z"
      fill={color}
    />
    <path
      d="M17 22.75H7C2.59 22.75 1.25 21.41 1.25 17V15C1.25 10.59 2.59 9.25 7 9.25H17C21.41 9.25 22.75 10.59 22.75 15V17C22.75 21.41 21.41 22.75 17 22.75ZM7 10.75C3.42 10.75 2.75 11.43 2.75 15V17C2.75 20.57 3.42 21.25 7 21.25H17C20.58 21.25 21.25 20.57 21.25 17V15C21.25 11.43 20.58 10.75 17 10.75H7Z"
      fill={color}
    />
    <path
      d="M8 16.9989C7.87 16.9989 7.74 16.9689 7.62 16.9189C7.49 16.8689 7.39001 16.7989 7.29001 16.7089C7.11001 16.5189 7 16.2689 7 15.9989C7 15.8689 7.02999 15.7389 7.07999 15.6189C7.12999 15.4889 7.20001 15.3889 7.29001 15.2889C7.39001 15.1989 7.49 15.1289 7.62 15.0789C7.98 14.9189 8.42999 15.0089 8.70999 15.2889C8.79999 15.3889 8.87001 15.4989 8.92001 15.6189C8.97001 15.7389 9 15.8689 9 15.9989C9 16.2589 8.88999 16.5189 8.70999 16.7089C8.51999 16.8889 8.26 16.9989 8 16.9989Z"
      fill={color}
    />
    <path
      d="M12 17.0009C11.74 17.0009 11.48 16.8909 11.29 16.7109C11.11 16.5209 11 16.2709 11 16.0009C11 15.8709 11.02 15.7409 11.08 15.6209C11.13 15.5009 11.2 15.3909 11.29 15.2909C11.52 15.0609 11.87 14.9509 12.19 15.0209C12.26 15.0309 12.32 15.0509 12.38 15.0809C12.44 15.1009 12.5 15.1309 12.56 15.1709C12.61 15.2009 12.66 15.2509 12.71 15.2909C12.8 15.3909 12.87 15.5009 12.92 15.6209C12.97 15.7409 13 15.8709 13 16.0009C13 16.2709 12.89 16.5209 12.71 16.7109C12.66 16.7509 12.61 16.7909 12.56 16.8309C12.5 16.8709 12.44 16.9009 12.38 16.9209C12.32 16.9509 12.26 16.9709 12.19 16.9809C12.13 16.9909 12.06 17.0009 12 17.0009Z"
      fill={color}
    />
    <path
      d="M16 17.0009C15.73 17.0009 15.48 16.8909 15.29 16.7109C15.2 16.6109 15.13 16.5009 15.08 16.3809C15.03 16.2609 15 16.1309 15 16.0009C15 15.7409 15.11 15.4809 15.29 15.2909C15.34 15.2509 15.39 15.2109 15.44 15.1709C15.5 15.1309 15.56 15.1009 15.62 15.0809C15.68 15.0509 15.74 15.0309 15.8 15.0209C16.13 14.9509 16.47 15.0609 16.71 15.2909C16.89 15.4809 17 15.7309 17 16.0009C17 16.1309 16.97 16.2609 16.92 16.3809C16.87 16.5109 16.8 16.6109 16.71 16.7109C16.52 16.8909 16.26 17.0009 16 17.0009Z"
      fill={color}
    />
  </g>
);

interface IPasswordProps {
  /**
   * The color of the icon
   * @default 'currentColor'
   */
  fill?: string;
  /**
   * The fill of the icon
   * @default false
   * @type boolean
   */
  filled?: boolean;
  /**
   * The size of the icon
   * @default 24
   * @type number
   */
  size?: number;
  /**
   * The height of the icon
   * @default 24
   * @type number
   */
  height?: number;
  /**
   * The width of the icon
   * @default 24
   * @type number
   * */
  width?: number;
}

const Password = ({
  fill = 'currentColor',
  filled = false,
  size = 24,
  height = 24,
  width = 24,
  ...props
}: IPasswordProps) => {
  switch (filled) {
    case false:
      return (
        <Svg
          className=""
          width={width || size}
          height={height || size}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          css={{
            display: 'inline',
          }}
          {...props}
        >
          <Light color={fill} />
        </Svg>
      );
    default:
      return (
        <Svg
          className=""
          width={width || size}
          height={height || size}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          css={{
            display: 'inline',
          }}
          {...props}
        >
          <Bold color={fill} />;
        </Svg>
      );
  }
};

Password.displayName = 'PasswordIcon';

export default Password;
