"use client";

import {
	ArrowLeft,
	ArrowRight,
	Binary,
	CircleDotDashed,
	CornerDownLeft,
	Cpu,
	Home,
	RadioTower,
	RotateCcw,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { routes } from "@/lib/routes";

type DiagnosticStatus = "READY" | "SCANNING";

function formatPathname(pathname: string) {
	const pathWithoutTrailingSlash =
		pathname === "/" ? "/" : pathname.replace(/\/$/, "") || "/";

	try {
		return decodeURIComponent(pathWithoutTrailingSlash);
	} catch {
		return pathWithoutTrailingSlash;
	}
}

const traceSteps = [
	{ id: "01", label: "Request", value: "GET", icon: RadioTower },
	{ id: "02", label: "Route map", value: "MISS", icon: Binary },
	{ id: "03", label: "Fallback", value: "READY", icon: CornerDownLeft },
] as const;

export default function NotFound() {
	const pathname = usePathname();
	const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
	const [attempts, setAttempts] = useState(0);
	const [requestedPath, setRequestedPath] = useState<string | null>(null);
	const [status, setStatus] = useState<DiagnosticStatus>("READY");

	useEffect(() => {
		setRequestedPath(formatPathname(pathname));
	}, [pathname]);

	useEffect(() => {
		return () => {
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current);
			}
		};
	}, []);

	function runDiagnostic() {
		setStatus("SCANNING");
		timeoutRef.current = setTimeout(() => {
			setAttempts((current) => current + 1);
			setStatus("READY");
			timeoutRef.current = null;
		}, 560);
	}

	const isScanning = status === "SCANNING";

	return (
		<div className="not-found-page">
			<div aria-hidden="true" className="not-found-page__grid" />
			<div
				aria-hidden="true"
				className="not-found-page__rings not-found-page__rings--cyan"
			/>
			<div
				aria-hidden="true"
				className="not-found-page__rings not-found-page__rings--paper"
			/>

			<header className="not-found-header">
				<Link
					aria-label="Brian Li Systems Lab home"
					className="not-found-brand"
					href={routes.home}
				>
					<span className="not-found-brand__mark">BL</span>
					<span className="not-found-brand__text">Brian Li · Systems Lab</span>
				</Link>
				<div className="not-found-header__status">
					<CircleDotDashed aria-hidden="true" size={17} strokeWidth={1.8} />
					<span>Route diagnostic · status: online</span>
				</div>
			</header>

			<section aria-labelledby="not-found-title" className="not-found-layout">
				<div className="not-found-copy">
					<p className="not-found-copy__trace">Error trace · 04 / 04</p>
					<p className="not-found-copy__label">Unresolved route</p>
					<p aria-hidden="true" className="not-found-copy__code">
						404
					</p>
					<h1 id="not-found-title">This signal doesn’t resolve to a page.</h1>
					<p className="not-found-copy__body">
						The requested path was not found in the route map. Verify the
						address or return to a known destination.
					</p>

					<div className="not-found-actions">
						<Link
							className="not-found-button not-found-button--primary"
							href={routes.home}
						>
							<Home aria-hidden="true" size={18} strokeWidth={1.8} />
							<span>Return to portfolio</span>
							<ArrowRight
								aria-hidden="true"
								className="not-found-button__arrow"
								size={19}
							/>
						</Link>
						<button
							className="not-found-button not-found-button--secondary"
							disabled={isScanning}
							onClick={runDiagnostic}
							type="button"
						>
							<RotateCcw
								aria-hidden="true"
								className={isScanning ? "not-found-button__spinner" : undefined}
								size={18}
								strokeWidth={1.8}
							/>
							<span>{isScanning ? "Scanning route…" : "Run diagnostic"}</span>
						</button>
					</div>

					<Link className="not-found-copy__verified" href={routes.home}>
						<ArrowLeft aria-hidden="true" size={14} />
						Verified destination /
					</Link>
				</div>

				<aside aria-label="Route inspector" className="route-inspector">
					<header className="route-inspector__header">
						<span>Route inspector</span>
						<span aria-live="polite" className="route-inspector__status">
							{status}
						</span>
					</header>

					<div className="route-inspector__path">
						<span>Requested path</span>
						<code aria-live="polite">{requestedPath ?? "Reading route…"}</code>
					</div>

					<ol className="route-inspector__trace">
						{traceSteps.map((step) => {
							const Icon = step.icon;
							const value =
								step.id === "03" && isScanning ? "READING" : step.value;

							return (
								<li key={step.id}>
									<span className="route-inspector__index">{step.id}</span>
									<Icon aria-hidden="true" size={15} strokeWidth={1.7} />
									<span>{step.label}</span>
									<strong
										className={step.id === "02" ? "is-warning" : undefined}
									>
										{value}
									</strong>
								</li>
							);
						})}
					</ol>

					<div className="route-inspector__attempt">
						<span>Diagnostic attempt</span>
						<strong>{String(attempts).padStart(2, "0")}</strong>
					</div>
					<div
						aria-hidden="true"
						className={`route-inspector__progress${isScanning ? " is-scanning" : ""}`}
					>
						<span />
					</div>

					<p className="route-inspector__message">
						No route record found. The home path is confirmed and safe to enter.
					</p>

					<footer className="route-inspector__footer">
						<Cpu aria-hidden="true" size={17} strokeWidth={1.8} />
						<span>Recovery path available</span>
					</footer>
				</aside>
			</section>
		</div>
	);
}
