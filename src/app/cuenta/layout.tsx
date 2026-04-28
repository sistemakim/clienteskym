import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider } from 'antd';
import '@ant-design/v5-patch-for-react-19';
import es_ES from 'antd/locale/es_ES';

export default function CuentaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ConfigProvider
      locale={es_ES}
      theme={{
        token: {
          colorPrimary: '#1a1a1a',
          colorBgContainer: '#ffffff',
          colorBorder: 'rgba(26,26,26,0.15)',
          colorText: '#1a1a1a',
          colorTextSecondary: 'rgba(26,26,26,0.65)',
          borderRadius: 12,
          fontFamily: 'inherit',
          controlHeight: 40,
        },
        components: {
          Button: { primaryShadow: 'none' },
          Statistic: { titleFontSize: 11 },
        },
      }}
    >
      <AntdRegistry>
        <div className="bg-paper p-5 pt-24">{children}</div>
      </AntdRegistry>
    </ConfigProvider>
  );
}
