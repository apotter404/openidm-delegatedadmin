cd /vagrant
nohup grunt > target/grunt.log &
service openidm start
( tail -f -n0 target/openidm_project/logs/server.out & ) | grep -q "OpenIDM ready"
