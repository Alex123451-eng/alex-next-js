import { FC, PropsWithChildren } from "react";
import { CustomLink } from "../CustomLink/CustomLink";
import { LINKS_MAIN } from "@/utils/constants";

import cls from 'classnames';
import styles from './styles.module.css';
import { getUser } from "@/services/getUser";
import { LoginSection } from "../LoginSection/LoginSection";

import { UserProvider } from "@/providers/UserProvider";
import { SignupSection } from "../SignupSection/SignupSection";

export const Layout: FC<PropsWithChildren> = async ({ children }) => {
	const { data } = await getUser()

	return (
		<UserProvider user={data}>
			<header className={cls(styles.header)}>
				{LINKS_MAIN.map(({ name, href }) => {
					return (
						<CustomLink key={href} name={name} href={href} styles={styles} />
					);
				})}
				<LoginSection />
				<SignupSection />
			</header>
			{children}
			<footer className={cls(styles.footer)}>
				Мой замечательный footer 2026
			</footer>
		</UserProvider>
	)
}