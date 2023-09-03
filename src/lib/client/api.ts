import { env } from '$env/dynamic/public';

export function getAPIOrigin(): string {
	const { protocol, hostname, port } = window.location;
	return `${protocol}//${hostname}:${env.PUBLIC_API_PORT || port}`;
}
