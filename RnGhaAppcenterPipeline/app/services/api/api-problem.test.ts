import { getGeneralApiProblem } from "./api-problem";
import { type ApiErrorResponse } from "apisauce";

test("handles connection errors", () => {
	expect(getGeneralApiProblem({ problem: "CONNECTION_ERROR" } as ApiErrorResponse<undefined>)).toEqual({
		kind: "cannot-connect",
		temporary: true
	});
});

test("handles network errors", () => {
	expect(getGeneralApiProblem({ problem: "NETWORK_ERROR" } as ApiErrorResponse<undefined>)).toEqual({
		kind: "cannot-connect",
		temporary: true
	});
});

test("handles timeouts", () => {
	expect(getGeneralApiProblem({ problem: "TIMEOUT_ERROR" } as ApiErrorResponse<undefined>)).toEqual({
		kind: "timeout",
		temporary: true
	});
});

test("handles server errors", () => {
	expect(getGeneralApiProblem({ problem: "SERVER_ERROR" } as ApiErrorResponse<undefined>)).toEqual({
		kind: "server"
	});
});

test("handles unknown errors", () => {
	expect(getGeneralApiProblem({ problem: "UNKNOWN_ERROR" } as ApiErrorResponse<undefined>)).toEqual({
		kind: "unknown",
		temporary: true
	});
});

test("handles unauthorized errors", () => {
	expect(
		getGeneralApiProblem({ problem: "CLIENT_ERROR", status: 401 } as ApiErrorResponse<undefined>)
	).toEqual({
		kind: "unauthorized"
	});
});

test("handles forbidden errors", () => {
	expect(
		getGeneralApiProblem({ problem: "CLIENT_ERROR", status: 403 } as ApiErrorResponse<undefined>)
	).toEqual({
		kind: "forbidden"
	});
});

test("handles not-found errors", () => {
	expect(
		getGeneralApiProblem({ problem: "CLIENT_ERROR", status: 404 } as ApiErrorResponse<undefined>)
	).toEqual({
		kind: "not-found"
	});
});

test("handles other client errors", () => {
	expect(
		getGeneralApiProblem({ problem: "CLIENT_ERROR", status: 418 } as ApiErrorResponse<undefined>)
	).toEqual({
		kind: "rejected"
	});
});

test("handles cancellation errors", () => {
	expect(getGeneralApiProblem({ problem: "CANCEL_ERROR" } as ApiErrorResponse<undefined>)).toBeNull();
});
