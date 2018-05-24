

const hosts = {
	"dev" : {
		"api":          "/api",
		"tuxedo":       "/tuxedo",
		"ssoLogin":     "http://10.224.180.103:8888/sso/control/main?url=http://10.224.140.196:8080/login/login",
		"ssoLogout":    "http://10.224.180.103:8888/sso/control/logout?url=http://10.224.140.196:8080/login/login",
		"avatar":       "http://10.224.140.196/avatar/photos/${userid}.jpg",
		"eapLogServer": "ws://10.224.90.205:9090/Log",
		"dashboard":    "/api"
	},

	"prd" : {
		"api":          "/api", 
		"tuxedo":       "/tuxedo",
		"ssoLogin":     "http://10.224.180.103:8888/sso/control/main?url=http://10.224.140.196:8080/login/login",
		"ssoLogout":    "http://10.224.180.103:8888/sso/control/logout?url=http://10.224.140.196:8080/login/login",
		"avatar":       "http://10.224.140.196/avatar/photos/${userid}.jpg",
		"eapLogServer": "ws://10.224.90.205:9090/Log", 
		"dashboard":    "/api"
	}
}

const ENV  = process ? process.env.NODE_ENV : "dev";

const host = hosts[ENV];

const api = {
    login : {
        host 	: host.dashboard,
        method	: "post",
        path	: "/login/user_validate",
        inputs	: ["userid", "password"],
        output	: {}
    }
}


export {host, api}